import {Module} from '../core/module'

export default class YoutubeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  static trigger() {
    console.log('you')
  }
}