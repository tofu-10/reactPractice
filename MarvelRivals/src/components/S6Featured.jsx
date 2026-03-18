import textLineImg from '../assets/images/background/txt-line.png'
import './styles/S6Featured.css'
export default function S6Featured(){
    return (
      <>
        <div className="container">

          <p>
            The Merc and the Monster Hunter. Will the Museum survive?
            <br />
            After Gambit's attempt to steal a prized artifact from the
            Collector's Museum, he and Rogue return to the scene of the crime in
            an attempt to escape. The Collector responds in the best way to
            avoid getting his hands dirty: by sending in his "top professional"
            <br />
            and also... Deadpool... and the Merc with a Mouth opens the doors on
            every cage within the Collection, turning the Museum into the
            greatest intergalactic disaster this timeline has ever seen. But
            there's a hunter on the horizon ready to put a stop to the antics.
          </p>
          <img src={textLineImg} alt="" className='txt-line' />
        </div>
      </>
    );
}