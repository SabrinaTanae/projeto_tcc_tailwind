import { Application, Controller } from "https://cdn.jsdelivr.net/npm/@hotwired/stimulus@3.2.2/+esm"
import { enter, leave } from "https://cdn.jsdelivr.net/npm/el-transition@0.0.7/+esm"

const application = Application.start()

application.register("menu", class extends Controller {
  static targets = ["menu", "backdrop"]
  
  open() {
    enter(this.menuTarget, 'left-slide-transition'),
    enter(this.backdropTarget, 'opacity-transition')
  }
  
  close() {
    leave(this.menuTarget, 'left-slide-transition'),
    leave(this.backdropTarget, 'opacity-transition')
  }
})