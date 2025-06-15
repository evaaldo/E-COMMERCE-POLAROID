import { Truck, InstagramLogo } from "phosphor-react"

export function Delivery() {
    return (
        <div id="delivery" className="flex justify-center items-center gap-10">
            <div className="w-[600px] flex items-center justify-center gap-10 py-8 rounded-xl shadow-pers">
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-xl">Entregas</span>
                    <p className="w-[400px]">Nós fazemos a entrega para todos os bairros de fortaleza por <strong>R$ 12,00</strong>. Região metropolitana a ser acertado.</p>
                </div>
                <Truck size={100} />
            </div>
            <div className="w-[600px] flex items-center justify-center gap-10 py-8 rounded-xl shadow-pers">
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-xl">Redes sociais</span>
                    <p className="w-[400px]">Nossa principal rede social, a qual divulgamos todos nossos trabalhos e conversamos com os clientes é o <a className="font-bold underline" href="https://www.instagram.com/lovephotooficial/">instagram</a>.</p>
                </div>
                <InstagramLogo size={100} />
            </div>
        </div>
    )
}