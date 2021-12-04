const nome =["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"]
export default function Side(){
    return (
        <Usuario nomeUsuario="catanacomics" descricao="Catana"/>
    )
}

function Usuario(props){
    return (
        <div class="sidebar">

            <div class="usuario">
                <img src={"assets/img/"+ props.nomeUsuario +".svg"} />
                <div class="texto">
                    <strong>{props.nomeUsuario}</strong>
                    {props.descricao}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {nome.map((info) =>(
                        <div class="sugestao">
                            <div class="usuario">
                                <img src={"assets/img/"+ info +".svg"} />
                                <div class="texto">
                                <div class="nome">{info}</div>
                                <div class="razao">Segue você</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
                ))}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>

        </div>
    )
}