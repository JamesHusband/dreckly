import Link from 'next/link';

export const DropdownMenu = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
      <Link
        href="/user"
        onClick={() => setIsMenuOpen(false)}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        My Profile
      </Link>
      <Link
        href="/login"
        onClick={() => setIsMenuOpen(false)}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Sign In
      </Link>
      <Link
        href="/create-account"
        onClick={() => setIsMenuOpen(false)}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Create Account
      </Link>
    </div>
  );
};
