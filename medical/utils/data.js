/**
 * banner数据
 */
function getBannerData() {
  var arr = ['../../images/2.jpg', '../../images/1.jpg', '../../images/3.jpg',]
  return arr
}
/*
 * 首页 navnav 数据
 */
function getIndexNavData() {
  var arr = [
    {
      id: 1,
      icon: "../../images/hospital.png",
      title: "医院查询"
    },
    {
      id: 2,
      icon: "../../images/nurse.png",
      title: "快捷预约"
    },
  ]
  return arr
}
/*
 * 首页 对应 标签 数据项
 */
function getIndexNavSectionData() {
  var arr = [
    [
      {

        subject: "云南昆明延安医院",
        coverpath: "../../images/yananhospital.png",
        price: '19888',
        scale: '三级甲等',
        message: '云南省昆明市人民东路245号'
      },
      {

        subject: "云南昆明市中医医院",
        coverpath: "../../images/tcmhospital.png",
        price: '31888',
        scale: '三级甲等',
        message: '昆明市盘龙区东风东路25号'
      },
      {

        subject: "云南省第三人民医院",
        coverpath: "../../images/3rdhospital.png",
        price: '25588',
        scale: '三级甲等',
        message: '云南省昆明市北京路292号'
      },
      {

        subject: "昆明市光明中西医医院",
        coverpath: "../../images/lighthospital.png",
        price: '11198',
        scale: '三级甲等',
        message: '昆明市五华区金宏阳歌舞厅附近'
      },
      {

        subject: "昆明锦康皮肤病医院",
        coverpath: "../../images/skinhospital.png",
        price: '12298',
        scale: '三级甲等',
        message: '昆明市盘龙区尚义街59号'
      },
      {

        subject: "昆明市光明中西医医院",
        coverpath: "../../images/lighthospital.png",
        price: '11198',
        scale: '三级甲等',
        message: '昆明市五华区金宏阳歌舞厅附近'
      },
      {

        subject: "昆明市光明中西医医院",
        coverpath: "../../images/lighthospital.png",
        price: '11198',
        scale: '三级甲等',
        message: '昆明市五华区金宏阳歌舞厅附近'
      }
    ],

  ]
  return arr
}

module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,

}