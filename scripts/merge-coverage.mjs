import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import libCoverage from 'istanbul-lib-coverage';
import libReport from 'istanbul-lib-report';
import reports from 'istanbul-reports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coverageDir = path.resolve(__dirname, '../coverage');
const mergedCoverageMap = libCoverage.createCoverageMap({});

const mergeCoverageFiles = (dir) => {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);

    if (fs.statSync(fullPath).isDirectory()) {
      mergeCoverageFiles(fullPath);
    } else if (item === 'coverage-final.json') {
      const coverageData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      mergedCoverageMap.merge(coverageData);
    }
  }
};

mergeCoverageFiles(coverageDir);

const reportDir = path.join(coverageDir, 'merged');
fs.mkdirSync(reportDir, { recursive: true });

const context = libReport.createContext({
  dir: reportDir,
  coverageMap: mergedCoverageMap,
});

const reportTypes = ['html', 'text-summary'];

reportTypes.forEach((reportType) => {
  const report = reports.create(reportType, {});
  report.execute(context);
});
