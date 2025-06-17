import { Question } from "phosphor-react"
import { useState } from "react"

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-around items-center py-6 w-full border-1 border-gray-200">
            <div className="flex justify-center items-center gap-20">
                <a href="#" className="text-3xl font-semibold">Love Photos</a>
                <ul className="flex gap-6">
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#product">Compre conosco</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#delivery">Entrega</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#delivery">Redes sociais</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#about">Sobre</a></li>
                    <li><a className="relative text-gray-700 after:absolute after:left-0 after:bottom-0 after:translate-y-1 after:h-[2px] after:w-full after:bg-gray-700 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:scale-x-100" href="#footer">Contato</a></li>
                </ul>
            </div>
            <button onClick={() => setIsOpen(true)}>
                <Question size={44} className="cursor-pointer" />
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="bg-white rounded-xl p-6 max-w-[400px] w-full max-h-[80vh] overflow-auto shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Como comprar?</h2>
                    <span className="text-center text-gray-800 mt-6 mb-9 block">
                        Comprar é rápido e fácil! Clique no botão <strong>"Comprar"</strong> para ser direcionado ao WhatsApp da loja. Depois, é só iniciar a conversa para finalizar sua compra.
                    </span>
                    <div className="flex justify-center">
                        <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition cursor-pointer"
                        >
                        Fechar
                        </button>
                    </div>
                    </div>
                </div>
            )}
        </header>
    )
}