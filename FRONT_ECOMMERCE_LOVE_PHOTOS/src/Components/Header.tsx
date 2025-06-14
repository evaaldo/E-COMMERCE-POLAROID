import { Question } from "phosphor-react"

export function Header() {
    return (
        <header className="flex justify-around items-center py-6 w-full border-1 border-gray-200">
            <div className="flex justify-center items-center gap-20">
                <h2 className="text-3xl font-semibold">Love Photos</h2>
                <ul className="flex gap-6">
                    <li><a className="text-gray-700 hover:text-black transition-all duration-300 ease-in-out" href="">Compre conosco</a></li>
                    <li><a className="text-gray-700 hover:text-black transition-all duration-300 ease-in-out" href="">Entrega</a></li>
                    <li><a className="text-gray-700 hover:text-black transition-all duration-300 ease-in-out" href="">Redes sociais</a></li>
                    <li><a className="text-gray-700 hover:text-black transition-all duration-300 ease-in-out" href="">Sobre</a></li>
                    <li><a className="text-gray-700 hover:text-black transition-all duration-300 ease-in-out" href="">Contato</a></li>
                </ul>
            </div>
            <div>
                <Question size={44} className="cursor-pointer" />
            </div>
        </header>
    )
}