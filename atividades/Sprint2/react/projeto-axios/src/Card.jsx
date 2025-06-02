export function Card() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex-col rounded-md border max-w-96 gap-2 p-2">
                <div>
                    <span className="font-bold">16.04.2025</span>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Tailwind é sensacional :D</h2>
                    <p className="text-gray-600">Depois que eu usei o Tailwind minha vida mudou, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fugit nesciunt minus pariatur! Saepe odio ab, quis magni corporis nulla omnis cum odit animi qui vitae a minus, quaerat labore.</p>
                </div>
                <div className="flex gap-2 items-center ">
                    <img
                        src="https://tiermaker.com/images/chart/chart/naruto-classico--sem-figurantes--filosofisica--395963/capajpg.png"
                        alt="Imagem de perfil João Pedro"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="tracking-wide">
                        <h3 className="font-semibold">João Pedro</h3>
                        <span className="text-sm">Engenheiro de Software</span>
                    </div>
                </div>
            </div>
        </div>
    );

};