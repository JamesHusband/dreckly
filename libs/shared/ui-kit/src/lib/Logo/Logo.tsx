import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
    >
      <div className="bg-orange-500 text-white p-2 rounded-lg font-bold text-xl">
        D
      </div>
      <span className="text-2xl font-bold text-gray-900">Drecktly</span>
    </Link>
  );
};
