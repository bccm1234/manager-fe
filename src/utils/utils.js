/**
 * 工具函数封装
 */
export default {
  formateDate(date, rule) {
    let fmt = rule || "yyyy-MM-dd hh:mm:ss";
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, date.getFullYear());
    }
    const o = {
      // 'y+': date.getFullYear(),
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
    };
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const val = o[k] + "";
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ? val : ("00" + val).substr(val.length)
        );
      }
    }
    return fmt;
  },
  generateRoute(menuList) {
    const routes = [];
    const deepList = (list) => {
      while (list.length) {
        const item = list.pop();
        if (item.action.length != 0) {
          routes.push({
            name: item.component,
            path: item.path,
            meta: {
              title: item.menuName,
            },
            component: item.component,
          });
        }
        if (item.children.length != 0 && item.action.length == 0) {
          deepList(item.children);
        }
      }
    };
    deepList(menuList);
    return routes;
  },
  flexColumnWidth(List, label, prop, number) {
    // 1.获取该列的所有数据
    const arr = List.map((x) => x[prop]);
    arr.push(label); // 把每列的表头也加进去算
    // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
    const getTextWidth = function (str) {
      let width = 0;
      const html = document.createElement("span");
      html.innerHTML = str;
      html.style.fontSize = "0.09rem";
      html.className = "getTextWidth";
      document.querySelector("body").appendChild(html);
      width = document.querySelector(".getTextWidth").offsetWidth;
      document.querySelector(".getTextWidth").remove();
      return width;
    };
    const getMaxLength = function (arr) {
      return arr.reduce((acc, item) => {
        if (item) {
          const calcLen = getTextWidth(item);
          if (acc < calcLen) {
            acc = calcLen;
          }
        }
        if (acc < 50) acc = 50;
        return acc;
      }, 0);
    };
    return getMaxLength(arr) + number + "px";
  },
};
