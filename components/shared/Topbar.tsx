"use client"
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";
import {useRouter} from 'next/navigation';
import {dark} from "@clerk/themes"
function Topbar() {
  const router = useRouter();
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4 flex-row">
        <Image src="./assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Breads</p>
      </Link>

              
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push('/sign-in')}>
              <div className="flex cursor-pointer">
                <Image
                  src="./assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
                  appearance={{
                    baseTheme:dark,
                    elements: {
                      organizationSwitcherTrigger: "py-2 px-4",
                    },
                  }}
                />
        
      
      </div>
    </nav>
  );
}
export default Topbar;
