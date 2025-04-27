  window.addEventListener("load", function(){
    this.focusIndex = 0;
    this.focusItem = function(index) {
      var t = this.links();
      if (!(index >= 0 && index < t.length)) return null;
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

    this.actByKeydown = function(event){
        if (event.key === 'ArrowDown') {
          let _, focusedEle = this.focusItem(this.focusIndex+1);
        } else if (event.key === 'ArrowUp') {
          let _, focusedEle = this.focusItem(this.focusIndex-1);
        }
        console.log(this.focusIndex);
    };
    document.addEventListener('keydown', this.actByKeydown.bind(this));

  });
