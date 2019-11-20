var express = require('express');
var router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

/* GET home page. */
router.get('/list', function (req, res, next) {
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';

  if (req.query.isadmin) {
    //管理员界面
    if (req.session.username == null) {
      res.json(
        new ErrorModel('未登录')
      )
      return
    }
    //强制查询自己的博客
    author = req.session.username;
  }
  const result = getList(author, keyword);
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
    )
  })
});
router.get('/detail', function (req, res, next) {
  const result = getDetail(req.query.id);
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
});

router.post('/new', loginCheck, (req, res, next) => {
  req.body.author = req.session.username;
  const result = newBlog(req.body);
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
})

router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(id, req.body);
  return result.then(val => {
    if (val) {
      res.json(
        new SuccessModel()
      )
    } else {
      res.json(
        new ErrorModel('更新博客失败')
      )
    }
  })
})

router.post('/del', loginCheck, (req, res, next) => {
  const author = req.session.username;
  const result = deleteBlog(id, author);
  return result.then(val => {
    if (val) {
      res.json(
        new SuccessModel()
      )
    } else {
      res.json(
        new ErrorModel('删除博客失败')
      )
    }
  })

})

module.exports = router;
