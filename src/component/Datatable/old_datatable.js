// import DatatableContainer from "./datatable";
// import DtNavs from "./datatable_navigation";
// import Header from "../header";
// import React from "react";
// import DtConfig from "./datatable_config";
// import Empty from "../Empty";

// const style = {
//   width: "100%",
//   height: "100%",
//   flex: 1,
//   overflow: "hidden",
//   display: "flex",
//   flexDirection: "column"
// };

// Array.prototype.toUppperCase = function() {
//   let tempArray = [];
//   for (let string of this) {
//     tempArray.push(string.charAt(0).toLocaleUpperCase() + string.slice(1));
//   }
//   return tempArray;
// };

// const Datatable = props =>
// <ArchiveContext.Consumer>
//   {context => {
//     let navigateData;
//     let fetching;
//     if (context.datastore[props.navigate]) {
//       navigateData = context.datastore[props.navigate].data;
//       fetching = context.datastore[props.navigate].fetching;
//     }
//     let data;
//     if (props.tableName && !fetching) {
//       data = Object.values(navigateData[props.tableName]);
//     }

//     return (
//       <div style={style}>
//         <Header />
//         {navigateData ? ( // if table exists  than show table navigation
//           <React.Fragment>
//             <DtNavs
//               data={Object.keys(navigateData).toUppperCase()}
//               baseLink={`/database-maintenance/${props.navigate}`}
//               key={props.navigate}
//             />
//             {!fetching && data ? (
//               data.length != 0 ? ( // if data is not fetching
//                 <DatatableContainer
//                   data={data}
//                   tableName={props.tableName}
//                   key={props.tableName}
//                   datastore={navigateData}
//                 />
//               ) : (
//                 <Empty
//                   link={
//                     props.tableName.charAt(0).toLocaleUpperCase() +
//                     props.tableName.slice(1)
//                   }
//                   datastore={navigateData}
//                 />
//               )
//             ) : null // if data is empty // put loading component here
//             }
//           </React.Fragment>
//         ) : null // do not show anything if table does not exists
//         }
//       </div>
//     );
//   }}
// </ArchiveContext.Consumer>

// return (
// null;
// )

// export default Datatable;
