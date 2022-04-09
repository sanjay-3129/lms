const RemoveFromBookMarks = (course) => {

}
const BookmarkCard = ({ course }) => {

    console.log("last bookmark", course);
    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <div className="card">
                    <div className="thumb">
                        <img
                            className="card-img"
                            src={course?.courseLogo}
                            alt="Card_image"
                        />
                        <div className="fav">
                            <span>
                                <i
                                    className="far fa-minus-square"
                                    data-toggle="tooltip"
                                    data-placement="left"
                                    title="Remove"
                                    onClick={RemoveFromBookMarks}
                                ></i>
                            </span>
                        </div>
                        <div className="img_overlay">
                            <div className="center">Preview Course</div>
                        </div>
                        <a href="/" className="stretched-link">
                            #
                        </a>
                    </div>
                    <div className="card-body">
                        <p>
                            Author's Name


                            <span>

                                <a className="view_more" href="#/">
                                    view more
                                </a>
                            </span>

                        </p>
                        {course?.author}
                        <h3 className="card-title">{course?.course_name}</h3>
                        <p className="card-text">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </p>
                        <hr />
                        <p className="card_footer">
                            <a className="sdt" href="courses_single.html">
                                <i className="far fa-user"></i>121
                            </a>
                            <a className="price" href="courses_single.html">
                                <i className="fas fa-rupee-sign"></i>
                                {course?.course_price}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BookmarkCard;
