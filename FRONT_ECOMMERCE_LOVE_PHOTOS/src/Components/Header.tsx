import { Question } from "phosphor-react"

export function Header() {
    return (
        <header className="flex justify-around items-center py-6 w-full border-1 border-gray-200">
            <div className="flex justify-center items-center gap-20">
                <h2 className="text-3xl font-semibold">Love Photos</h2>
                <ul className="flex gap-6">
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#product">Compre conosco</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#delivery">Entrega</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#delivery">Redes sociais</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#about">Sobre</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#footer">Contato</a></li>
                </ul>
            </div>
            <div>
                <Question size={44} className="cursor-pointer" />
            </div>
        </header>
    )
}