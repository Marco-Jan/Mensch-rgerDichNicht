class PlayField{
    private playFieldOneCoords: number[][];
    private playFieldTwoCoords: number[][];
    private playFieldThreeCoords: number[][];
    private selectedBoard: number;


    constructor(selectedBoard: number){
         this.playFieldOneCoords = [
            //Koordinaten für das Spielfeld
            [10,4],[9,4],[8,4],[7,4],[6,4],[6,3],[6,2],[6,1],[6,0],[5,0],
            [4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,5],
            [0,6],[1,6],[2,6],[3,6],[4,6],[4,7],[4,8],[4,9],[4,10],[5,10],
            [6,10],[6,9],[6,8],[6,7],[6,6],[7,6],[8,6],[9,6],[10,6],[10,5]          
        ]
        this.playFieldTwoCoords = [
            [9,5],[8,5],[7,5],[6,5],[5,5],[5,4],[5,3],[5,2],[5,1],[5,0],
            [4,0],[3,0],[2,0],[1,0],[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],
            [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[5,7],[5,8],[5,9],[5,10],
            [6,10],[7,10],[8,10],[9,10],[10,10],[10,9],[10,8],[10,7],[10,6],[10,5]
        ]
        this.playFieldThreeCoords = [
            [5,9],[5,8],[5,7],[5,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
            [10,4],[10,3],[10,2],[10,1],[10,0],[9,0],[8,0],[7,0],[6,0],[5,0],
            [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[3,5],[2,5],[1,5],[0,5],
            [0,6],[0,7],[0,8],[0,9],[0,10],[1,10],[2,10],[3,10],[4,10],[5,10]
        ]
        this.selectedBoard = selectedBoard;
    }
    addId(newDiv:HTMLDivElement ,coordinates: number[]): void{
        let indexOfCoords = -1;

        switch (this.selectedBoard) {
            case 1:
              indexOfCoords = this.playFieldOneCoords.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
              break;
            case 2:
              indexOfCoords = this.playFieldTwoCoords.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
              break;
            case 3:
              indexOfCoords = this.playFieldThreeCoords.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
              break;
          }
    
        if(indexOfCoords !== -1){  
            newDiv.classList.add("playContainer");                 
            newDiv.id = `playfield-${indexOfCoords}`;
        }
    }
    
}

export {PlayField};