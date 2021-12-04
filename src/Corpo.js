import Stories from "./Stories"
import Posts from "./Posts"
import Side from "./Side"

export default function Corpo(){
    return (
        <div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts />            
        </div>

            <Side />
 
      </div>
    )
}