
const links = [{link:"9gag.svg", span:"9gag"}, {link:"meowed.svg", span:"meowed"}, {link:"barked.svg", span:"barked"}, {link:"nathanwpylestrangeplanet.svg", span:"nathanwpylestrangeplanet"}, {link:"wawawicomics.svg", span:"wawawicomics"}, {link:"respondeai.svg", span:"respondeai"}, {link:"filomoderna.svg", span:"filomoderna"}, {link:"memeriagourmet.svg", span:"memeriagourmet"}]

export default function Stories(){
    return(
        <div class="stories">
             

               {links.map((array, span) => (
            <div class="story">
                <div class="imagem">
                    <img src={"assets/img/" + array.link} />
                </div>
                <div class="usuario">
                    {array.span}
                </div>
            </div>
            ))}
                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
        </div>
    
    )
}
