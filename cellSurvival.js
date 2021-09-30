function cellLives(alive, neighbours) {
    let willLive = false;
    if (alive == 1) {
        switch (neighbours) {
            case 0:
                willLive = false;
                break;
            case 1:
                willLive = false;
                break;
            case 2:
                willLive = true;
                break;
            case 3:
                willLive = true;
                break;
        }
    }
    if (alive == 0 && neighbours == 3) {
        willLive = true;
    }

    return willLive;
    
    /*if(alive == 1 & (neighbours <2 || neighbours >3)){
        willLive = false;

    } */
    /*if (alive)
    {
        if (neighbours < 2)
        willLive = false;
        else 
        willLive = true;
    }
    return willLive;*/
}

export { cellLives };

// this._alive = cellLives(this._alive, someNumber);    //example usage