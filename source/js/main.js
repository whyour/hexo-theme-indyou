// 图片查看器
import Viewer from './viewer';
// 边缘
import Primary from './primary';

import { addLoadEvent } from './util';

require('default-passive-events');

addLoadEvent(function () {
    Viewer.init()
    Primary.init(window, document)
})
