( function(e) {
  this.focusIndex = 0;
  this.focusItem = function(index) {
    var t = this.links();
    if (index < 0) { this.clickPrev(); }
    else if (index >= t.length) { this.clickNext(); };
    this.focusIndex = index;
    var n = t[this.focusIndex];
    return n.focus(), n
  };
  this.links = function(){
     let a_tags = Array.from(document.querySelectorAll('a:has(>h3)')); 
     return a_tags.filter((function(a_tag) {
       return a_tag.checkVisibility()
     }))
  };

  this.clickLink = function(ele){ ele && ele.click(); }
  this.clickNext = function(){ this.clickLink(document.querySelector('#pnnext')); };
  this.clickPrev = function(){ this.clickLink(document.querySelector('#pnprev')); };
  this.actByKeydown = function(event){
      if (event.key === 'ArrowDown') {
        let _, focusedEle = this.focusItem(this.focusIndex+1);
      } else if (event.key === 'ArrowUp') {
        let _, focusedEle = this.focusItem(this.focusIndex-1);
      } else if (event.key === 'ArrowRight') {
        this.clickNext();
      } else if (event.key === 'ArrowLeft') {
        this.clickPrev();
      }
  };
  document.addEventListener('keydown', this.actByKeydown.bind(this));
  this.focusItem(0)
}() );
