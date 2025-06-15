export function About() {
    return (
        <div className="flex justify-center items-center gap-20 py-30">
            <div className="flex flex-col gap-6">
                <span className="text-6xl font-bold pb-10">O que fazemos?</span>
                <p>A love photos confecciona itens polaroid, sejam estes fotos, polaroid de mesa ou algumas variações criativas desses projetos</p>
                <p>Temos como diferencial o atendimento ao cliente, nos comunicando via instagram e whatsapp com velocidade para melhor entendimento do desejo do cliente.</p>
                <p>Entre em contato e vamos juntos criar a sua lembrança de um momento especial!</p>
            </div>
            <img className="rounded-2xl w-[400px]" src="/sobre.png" alt="" />
        </div>
    )
}