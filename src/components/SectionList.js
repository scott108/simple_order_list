import React from 'react';

function SectionList(props) {
  const { data, renderHeader, renderRow } = props;
  let count = 0;
  const sections = data.reduce((viewList, group, index) => {
    viewList.push(renderHeader(index, group.title));
    group.data.forEach((item) => {
      viewList.push(renderRow(count, item));
      count++;
    })
    return viewList;
  }, []);
  return (
    <>
      {sections}
    </>
  );
}

export default SectionList;
