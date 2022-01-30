import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import style from './lazyImage.module.css';

const LazyImage = props => {
  const supportLoading = useMemo(() => {
    const img = new Image();
    return img.loading;
  }, []);

  useEffect(() => {
    if (!supportLoading) {
      // ios safari 不支持 loading 属性
      const lazyImages = document.querySelectorAll('img[data-src]');

      const imageLoad = image => {
        // 把图片链接赋值给 src
        image.setAttribute('src', image.getAttribute('data-src'));
        // 加载完后删除 data-src 属性
        image.addEventListener('load', () => {
          image.removeAttribute('data-src');
        });
      };
      // 创建一个IntersectionObserver对象实例
      const intersectionObserver = new IntersectionObserver(images => {
        images.forEach(image => {
          // 判断img元素是否可见，可见元素调用src属性赋值方法
          if (image.isIntersecting) {
            // target属性为被观察的目标元素
            imageLoad(image.target);
            // 对已经加载的图片取消监听
            intersectionObserver.unobserve(image.target);
          }
        });
      });
      // 观察所有需要懒加载的图片
      lazyImages.forEach(image => {
        intersectionObserver.observe(image);
      });
    }
  });

  return supportLoading ? (
    <img
      className={`${style.lazyImage} ${props.className || ''}`}
      src={props.src}
      alt="lazy"
      loading="lazy"
    />
  ) : (
    <img
      alt="lazy"
      className={`${style.lazyImage} ${props.className || ''}`}
      src={props.defaultimg}
      data-src={props.src}
      loading="lazy"
    />
  );
};

LazyImage.propTypes = {
  /**
   * Define initial value for the LazyImage
   */
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultimg: PropTypes.string,
};

LazyImage.defaultProps = {
  className: '',
  defaultimg: '',
};

export default LazyImage;
