function colResize(element, pushStyles) {
    this.elements = document.getElementsByClassName(element)
    this.resizing = undefined
    this.pageX = undefined
    this.resizingElementWidth = undefined
    this.pushValue = pushStyles
}

colResize.prototype.addEvent = function(){

    for (let element of this.elements) {
            element.addEventListener('mousedown', this.dragEvent.bind(this))
        }
        document.addEventListener('mousemove', this.dragStart.bind(this))
        document.addEventListener('mouseup', this.dragEnd.bind(this))
}

colResize.prototype.removeEvent = function(){
    for (let element of this.elements) {
        element.removeEventListener('mousedown')

    }
    document.removeEventListener('mousemove', this.dragStart, false)
    document.removeEventListener('mouseup', this.dragEnd, false)


}

colResize.prototype.dragEvent = function(e){
    e.stopPropagation()
    console.log('start')
    // set resizing to colresize line's parent
    e.preventDefault()
    this.resizing = e.target.parentElement
    this.data_value = e.target.dataset.col
    this.pageX = e.pageX
    this.resizingElementWidth = this.resizing.offsetWidth

}

colResize.prototype.dragStart = function(e){
    e.stopPropagation()
    console.log('middle')
    if(this.resizing) {

        let diffX = e.pageX - this.pageX
        // console.log(diffX)
        // this.pushValue(this.resizingElementWidth + diffX, diffX, this.data_value)

        let cols = document.getElementsByClassName(`col-${this.data_value}`)

        for (let col of cols) {
            col.style.minWidth = this.resizingElementWidth + diffX + 'px'
        }

    }
}

colResize.prototype.dragEnd = function(e){
    console.log('end')
    e.stopPropagation()
    this.resizing = undefined
    this.pageX = undefined
    this.resizingElementWidth = undefined
    this.diffX = undefined
}

export default colResize