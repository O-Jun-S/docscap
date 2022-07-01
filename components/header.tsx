import type { NextPage } from "next";

const Header: NextPage<Props> = () => {
    return (
        <>
            <header className="flex flex-col items-center gap-3">
                  <h1 className="text-5xl text-teal-700">DocsCap</h1>
                  <h1 className="text-3xl">斜めに撮影した書類を簡単補正</h1>
            </header>
        </>
    );
}

export default Header;

