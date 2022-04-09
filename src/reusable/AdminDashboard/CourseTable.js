const CourseTable = (props) => {
  const { course, idx } = props.value;
  return (
    <>
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{course?.courseName}</td>
        <td>{course?.NoOfStudents}</td>
        <td>{course?.categoryName}</td>
        <td>{course?.cost}</td>
      </tr>
    </>
  );
};
export default CourseTable;
