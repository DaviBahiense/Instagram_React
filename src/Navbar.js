
const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

export default function Navbar(){
    return (
        <div class="navbar">
        <div class="container">
          <div class="logo">
            <Icon name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <Icon name="logo-instagram" />
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {icones.map((icon) => (<ion-icon name={icon}></ion-icon>))}
          </div>

          <div class="icones-mobile">
            <Icon name="paper-plane-outline" />
          </div>
        </div>
      </div>
    )
}

function Icon(props){
  return (
    <ion-icon name={props.name}></ion-icon>
  )
}