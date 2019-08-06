function colResize(element, pushStyles) {
    this.elements = document.getElementsByClassName(element)
    this.resizing = undefined
    this.pageX = undefined
    this.diffX = undefined
    this.resizingElementWidth = undefined
    this.pushValue = pushStyles
}

colResize.prototype.addEvent = function(){

    for (let element of this.elements) {
            element.addEventListener('mousedown', this.dragEvent.bind(this))
            element.addEventListener('dragstart', this.dragStart.bind(this))
            element.addEventListener('drag', this.dragging.bind(this))
            element.addEventListener('dragend', this.dragEnd.bind(this))
        }
}

colResize.prototype.removeEvent = function(){
    for (let element of this.elements) {
        element.removeEventListener('mousedown')
        element.removeEventListener('dragstart')
        element.removeEventListener('dragend')
        element.addEventListener('drag')

    }

}

colResize.prototype.dragEvent = function(e){
    this.resizing = e.target.parentElement
    this.data_value = e.target.dataset.col
    this.pageX = e.pageX
    this.resizingElementWidth = this.resizing.offsetWidth

    console.log(this)

}

colResize.prototype.dragStart = function(e){
    console.log('dragstart')
}

colResize.prototype.dragEnd = function(e){
    console.log('ending')
    if(this.resizing) {
        this.diffX = e.pageX - this.pageX
        this.pushValue(this.resizingElementWidth + this.diffX, this.diffX, this.data_value)
    }

    this.resizing = undefined
    this.pageX = undefined
    this.resizingElementWidth = undefined
    this.diffX = undefined

}

colResize.prototype.dragging = function(e) {
    console.log('draggin')
    if(this.resizing) {
        let oldDiffX = this.diffX
        this.diffX = e.pageX - this.pageX
        if(oldDiffX !== this.diffX) {
            console.log(this.diffX)
            this.pushValue(this.resizingElementWidth + this.diffX, this.diffX, this.data_value)
        }
    }
}

export default colResize