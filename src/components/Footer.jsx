import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-custom text-white">
      <div className="flex flex-col items-center gap-6 px-6 py-14 text-center">
        <h2 className="text-4xl font-bold tracking-tight">KeenKeeper</h2>
        <p className="max-w-md text-sm text-white/70">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3">
          <span className="text-sm font-medium text-white">Social Links</span>
          <div className="flex items-center gap-3">
            <a
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center bg-white text-black rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <FaInstagram size={15} />
            </a>
            <a
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center bg-white text-black rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center bg-white text-black rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <FaXTwitter size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 px-6 py-4 text-xs text-white/50 sm:flex-row">
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="#" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="transition hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="transition hover:text-white">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}