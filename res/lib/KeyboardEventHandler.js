function KeyboardEventHandler(key, auto, onPress, onRelease) {
    this.key = key;
    this.onPress = onPress;
    this.onRelease = onRelease;            
    this.pressed = false;
    this.auto = auto;

    this.onKeyDown = (event) => {
        if (event.key === this.key) {
            if ( (!this.pressed || this.auto) && this.onPress) 
                this.onPress();
            this.pressed = true;                    
            event.preventDefault();
        }
    }

    this.onKeyUp   = (event) => {
        if (event.key === this.key) {
            if ( (this.pressed || this.auto) && this.onRelease) 
                this.onRelease();
            this.pressed = false;                    
            event.preventDefault();
        }
    }

    window.addEventListener("keydown", this.onKeyDown, false);            
    window.addEventListener("keyup", this.onKeyUp, false);

    this.unsubscribe = () => {                
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup",  this.onKeyUp);
    };            
}
