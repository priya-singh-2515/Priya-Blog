import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';


const BlogItem = ({blog: {description,title,createdAt,authorName,authorAvatar,cover,category,id,},}) => {

  const navigate = useNavigate();
  const navigatePage=()=>{
    navigate(`/blog/${id}`)
  }
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3 className="blogTitle"onClick={navigatePage}>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>➝</Link>
      </footer>
    </div>
  );
};

export default BlogItem;