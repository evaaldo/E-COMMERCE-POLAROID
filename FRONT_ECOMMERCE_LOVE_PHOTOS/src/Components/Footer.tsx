import { InstagramLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer id="footer" className="flex justify-around items-center py-8 border border-gray-200">
            <div className="w-[600px] flex flex-col items-center gap-4 text-center">
                <h2 className="font-bold text-2xl">Atenção!</h2>
                <p>Nossos dois principais meios de contato são via direct no <a className="font-bold underline" href="https://www.instagram.com/lovephotooficial/">Instagram</a> e via whatsapp. Escolha qual o atende mais!</p>
            </div>
            <div className="w-[600px] flex flex-col items-center gap-2 text-center">
                <h2 className="font-bold text-2xl">Telefone para contato</h2>
                <p>+55 (85) 99935-4328</p>
                <a href="">
                    <InstagramLogo size={100} />
                </a>
            </div>
        </footer>
    )
}