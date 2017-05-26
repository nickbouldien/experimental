import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';

class CatStore extends EventEmitter{
  constructor(){
    super();
      this.cats = [{}]
      this.newCat = {}
  }

  getCats(){
    return this.cats;
  }

  updateCats(cats){
    this.cats = cats
    this.emit('change')
  }

  addCat(cat){
    this.newCat = cat
    this.cats.push(cat)
    this.emit('change')
  }


  handleAction(action){
    console.log(action.cats);
    switch(action.type){
      case("FETCH_CATS"):{
        this.updateCats(action.cats)
        break
      }
      case("NEW_CAT"):{
        this.addCat(action.cat);
        break;
      }
      default:{}
    }
  }
}

const catStore = new CatStore();
dispatcher.register(catStore.handleAction.bind(catStore))
export default catStore;
