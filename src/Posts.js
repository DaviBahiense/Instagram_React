
const info = [{usuario:"meowed", img:"gato-telefone.svg", curtido:"respondeai", numero:"101.523"}, {usuario:"barked", img:"dog.svg", curtido:"adorable_animals", numero:"99.159"}]

export default function Posts(){
    return (
        <div class="posts">

        {info.map ((elemento) =>(
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={"assets/img/" + elemento.usuario + ".svg"} />
                        {elemento.usuario}
                    </div>
                    <div class="acoes">
                        <Icon nome="ellipsis-horizontal"/>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={"assets/img/" + elemento.img} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <Icon nome="heart-outline"/>
                            <Icon nome="chatbubble-outline"/>
                            <Icon nome="paper-plane-outline"/>
                        </div>
                        <div>
                            <Icon nome="bookmark-outline"/>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={"assets/img/" + elemento.curtido + ".svg"} />
                        <div class="texto">
                            Curtido por <strong>{elemento.curtido}</strong> e <strong>outras {elemento.numero} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        ))}

        </div>
    )
}

function Icon(props){
    return (
      <ion-icon name={props.nome}></ion-icon>
    )
  }