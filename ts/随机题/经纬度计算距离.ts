/**
 * 通过经纬度计算两点距离
 * @param d 
 * 
 * 1.角度转弧度
 * 2.代入Haversine formula公式
 */

const rad = (d: number) => {
  return d * Math.PI / 180;
}

export const d = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const EARTH_RADIUS = 6378.137;
  const radLat1 = rad(lat1);
  const radLat2 = rad(lat2);
  const a = radLat1 - radLat2;
  const b = rad(lng1) - rad(lng2);
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * EARTH_RADIUS;
  s = Math.round(s * 10000) / 10;//单位为米
  return s;
}