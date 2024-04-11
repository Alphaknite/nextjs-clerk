import { auth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import {neobrutalism} from "@clerk/themes";

const Header = () => {
    const { userId } = auth();

    return (
        <>
            <div className="flex justify-between items-center p-6 bg-gray-800">
                <div>
                    <Link href="/" className="text-2xl font-bold text-white">Alphaknite</Link>
                </div>
                <div className="">
                    {userId ? (
                        <div className="mx-3">
                            <UserButton afterSignOutUrl="/" appearance={{baseTheme: neobrutalism}}/>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link href="/sign-in" className='text-white hover:underline'>Sign in</Link>
                            <Link href="/sign-up" className="text-white hover:underline">Sign up</Link>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    );
}

export default Header;