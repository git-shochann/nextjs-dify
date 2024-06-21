import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutProps } from "../types/types";

/* </types/types.tsにて一元管理 */

// // 受け取る引数の型を宣言する
// // TypeScriptなので必要
// // ReactNode -> Reactで使用できるすべての要素（文字列、数値、React要素、配列、nullなど）を表す
// type LayoutProps = {
//     children: ReactNode
// };

// chilerenという引数を受け取って表示する
// 定数: 関数型コンポーネント<右のプロパティの型（childrenの部分）> + 引数
const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {/*  */}
        <Navbar />
        {/*  */}
        <main className="w-full pb12 px-4">{children}</main>
        {/*  */}
        <Footer />
        {/*  */}
      </div>
    </div>
  );
};
 
export default Layout;