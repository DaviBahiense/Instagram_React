
export default function Header(){
    return (
        <header>
        <div class="header-content">
          <div class="top-left" style="box-sizing: content-box;">
            <div class="box-logo">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <img class="logo" src="./assets/logo.png" alt="Instagram"/>
          </div>
          <input type="text" class="top-mid" placeholder="Search"/>
          <div class="top-right">
            <div class="mobile">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div class="no-mobile">
              <ion-icon name="compass-outline"></ion-icon>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
              </div>
          </div>
          
        </div>
      </header>
    )
}