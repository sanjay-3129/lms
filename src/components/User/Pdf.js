// import React, { useEffect, useState } from "react";
// // import { Button } from "react-bootstrap";
// import {
//     Text,
//     View,
//     Link,
//     Page,
//     Document,
//     StyleSheet,
//     Canvas,
//     PDFDownloadLink
// } from "@react-pdf/renderer";
// // // import Invoice from "./Invoice";

// const styles = StyleSheet.create({
//     brandSection: {
//         backgroundColor: "#0d1033",
//         padding: "10px 40px"
//     },
//     logo: {
//         width: "50%"
//     },
//     row: {
//         display: "flex",
//         flexWrap: "wrap"
//     },
//     col6: {
//         width: "50%",
//         flex: "0 0 auto"
//     },
//     textWhite: {
//         color: "#fff"
//     },
//     companyDetails: {
//         float: "right",
//         textAlign: "right"
//     },
//     bodySection: {
//         padding: "16px",
//         border: "1px solid gray"
//     },
//     heading: {
//         fontSize: "20px",
//         marginBottom: "08px"
//     },
//     subHeading: {
//         color: "#262626",
//         marginBottom: "05px"
//     },
//     table: {
//         display: "table",
//         backgroundColor: "#fff",
//         width: "100%",
//         borderCollapse: "collapse",
//         boxSizing: "borderBox",
//         textIndent: "initial",
//         borderSpacing: "2px",
//         borderColor: "grey",
//         boxShadow: "0px 0px 5px 0.5px gray"
//     },
//     thead: {
//         display: "table-header-group",
//         verticalAlign: "middle",
//         borderColor: "inherit",
//         borderCollapse: "collapse",
//         textIndent: "initial",
//         borderSpacing: "2px"
//     },
//     thr: {
//         display: "table-row",
//         verticalAlign: "inherit",
//         borderCollapse: "collapse",
//         textIndent: "initial",
//         borderSpacing: "2px",
//         border: "1px solid #111",
//         backgroundColor: "#f2f2f2"
//     },
//     th: {
//         display: "table-cell",
//         verticalAlign: "inherit",
//         fontWeight: "bold",
//         textAlign: "-internal-center",
//         borderCollapse: "collapse",
//         textIndent: "initial",
//         borderSpacing: "2px",
//         paddingTop: "8px",
//         paddingBottom: "8px",
//         border: "1px solid #dee2e6",
//         width: "20%"
//     },
//     tbody: {
//         display: "table-row-group",
//         verticalAlign: "middle",
//         borderColor: "inherit",
//         borderCollapse: "collapse",
//         textIndent: "initial",
//         borderSpacing: "2px"
//     },
//     tr: {
//         display: "table-row",
//         verticalAlign: "middle",
//         borderColor: "inherit",
//         borderCollapse: "collapse",
//         textIndent: "initial",
//         borderSpacing: "2px"
//     },
//     td: {
//         display: "table-cell",
//         verticalAlign: "middle",
//         textAlign: "center",
//         borderCollapse: "collapse",
//         textIndent: "initial",
//         borderSpacing: "2px",
//         paddingTop: "8px",
//         paddingBottom: "8px",
//         border: "1px solid #dee2e6"
//     },
//     textRight: {
//         textAlign: "end"
//     },
//     floatRight: {
//         float: "right"
//     }
// });

// const Pdf = () => {
//     // const [ready, setReady] = useState(false);

//     // useEffect(() => {
//     //     // THIS IS THE HACK
//     //     // setReady(true);
//     //     setTimeout(() => {
//     //         setReady(false);
//     //     }, 1);
//     // }, []);

//     // const toggle = () => {
//     //   setReady(false);
//     // };

//     // const MyDocument = (
//     //   <Document>
//     //     <Page size="A4">
//     //       <View>
//     //         <Canvas style={styles.brandSection}>
//     //           <Canvas style={styles.row}>
//     //             <Canvas style={styles.col6}>
//     //               <Text style={styles.textWhite}>MERIT BODHI</Text>
//     //             </Canvas>
//     //             <Canvas style={styles.col6}>
//     //               <Canvas style={styles.companyDetails}>
//     //                 <Text style={styles.textWhite}>
//     //                   assdad asd asda asdad a sd
//     //                 </Text>
//     //                 <Text style={styles.textWhite}>assdad asd asd</Text>
//     //                 <Text style={styles.textWhite}>+91 888555XXXX</Text>
//     //               </Canvas>
//     //             </Canvas>
//     //           </Canvas>
//     //         </Canvas>

//     //         <Canvas style={styles.bodySection}>
//     //           <Canvas style={styles.row}>
//     //             <Canvas style={styles.col6}>
//     //               <Text style={styles.heading}>Invoice No.: 001</Text>
//     //               <Text style={styles.subHeading}>Tracking No. fabcart2025 </Text>
//     //               <Text style={styles.subHeading}>Order Date: 20-20-2021 </Text>
//     //               <Text style={styles.subHeading}>
//     //                 Email Address: customer@gfmail.com{" "}
//     //               </Text>
//     //             </Canvas>
//     //             <Canvas style={styles.col6}>
//     //               <Text style={styles.subHeading}>Full Name: </Text>
//     //               <Text style={styles.subHeading}>Address: </Text>
//     //               <Text style={styles.subHeading}>Phone Number: </Text>
//     //               <Text style={styles.subHeading}>City,State,Pincode: </Text>
//     //             </Canvas>
//     //           </Canvas>
//     //         </Canvas>
//     //         <Canvas style={styles.bodySection}>
//     //           <Text style={styles.heading}>Ordered Items</Text>{" "}
//     //           <Canvas style={styles.table}>
//     //             <Canvas style={styles.thead}>
//     //               <Canvas style={styles.thr}>
//     //                 <Canvas style={styles.th}>Product</Canvas>
//     //                 <Canvas style={styles.th}>Price</Canvas>
//     //                 <Canvas style={styles.th}>Quantity</Canvas>
//     //                 <Canvas style={styles.th}>Grandtotal</Canvas>
//     //               </Canvas>
//     //             </Canvas>
//     //             <Canvas style={styles.tbody}>
//     //               <Canvas style={styles.tr}>
//     //                 <Canvas style={styles.td}>Product Name</Canvas>
//     //                 <Canvas style={styles.td}>10</Canvas>
//     //                 <Canvas style={styles.td}>1</Canvas>
//     //                 <Canvas style={styles.td}>10</Canvas>
//     //               </Canvas>
//     //               <Canvas style={styles.tr}>
//     //                 <Canvas style={styles.td}>
//     //                   {/* colspan="3" style={styles.text-right"} */}
//     //                   Sub Total
//     //                 </Canvas>
//     //                 <Canvas style={styles.td}> 10.XX</Canvas>
//     //               </Canvas>
//     //               <Canvas style={styles.tr}>
//     //                 <Canvas style={styles.td}>
//     //                   {/* colspan="3" style={styles.text-right"} */}
//     //                   Tax Total %1X
//     //                 </Canvas>
//     //                 <Canvas style={styles.td}> 2</Canvas>
//     //               </Canvas>
//     //               <Canvas style={styles.tr}>
//     //                 <Canvas style={styles.td}>
//     //                   {/* colspan="3" style={styles.text-right"} */}
//     //                   Grand Total
//     //                 </Canvas>
//     //                 <Canvas style={styles.td}> 12.XX</Canvas>
//     //               </Canvas>
//     //             </Canvas>
//     //           </Canvas>
//     //           <Text style={styles.heading}>Payment Status: Paid</Text>
//     //           <Text style={styles.heading}>Payment Mode: Cash on Delivery</Text>
//     //         </Canvas>
//     //         <Canvas style={styles.bodySection}>
//     //           <Text>
//     //             &copy; Copyright 2021 - MeritBodhi. All rights reserved.
//     //             {/* <Link
//     //               href="https://www.meritbodhi.com/"
//     //               style={styles.floatRight}
//     //             >
//     //               www.meritbodhi.com
//     //             </Link> */}
//     //           </Text>
//     //         </Canvas>
//     //       </View>
//     //     </Page>
//     //   </Document>
//     // );
//     const MyDocument = (
//         <Document>
//             <Page size="A4">
//                 <View>
//                     <Text>PDF</Text>
//                 </View>
//                 <View>
//                     <Link href="https://www.fundaofwebit.com/" style={styles.floatRight}>
//                         "Domain Name"
//                     </Link>
//                 </View>
//             </Page>
//         </Document>
//     );

//     return (
//         <div>
//             {ready && (
//                 <PDFDownloadLink document={MyDocument} fileName="PDF">
//                     {({ blob, url, loading, error }) =>
//                         loading ? (
//                             "Loading document..."
//                         ) : (
//                             <Button onClick={() => setReady(true)}>download pdf</Button>
//                         )
//                     }
//                 </PDFDownloadLink>
//             )}
//             {!ready && <Button onClick={() => setReady(true)}>generate pdf</Button>}
//         </div>
//     );
// };

// export default Pdf;

// import React from "react";
// import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import LebronStretch from "../photos/lebron_transparent.png";

// const styles = StyleSheet.create({
//     body: {
//         paddingTop: 35,
//         paddingBottom: 65,
//         paddingHorizontal: 35,
//     },
//     title: {
//         fontSize: 24,
//         textAlign: "center",
//     },
//     text: {
//         margin: 12,
//         fontSize: 14,
//         textAlign: "justify",
//         fontFamily: "Times-Roman",
//     },
//     image: {
//         marginVertical: 15,
//         marginHorizontal: 100,
//     },
//     header: {
//         fontSize: 12,
//         marginBottom: 20,
//         textAlign: "center",
//         color: "grey",
//     },
//     pageNumber: {
//         position: "absolute",
//         fontSize: 12,
//         bottom: 30,
//         left: 0,
//         right: 0,
//         textAlign: "center",
//         color: "grey",
//     },
// });

// const PDF = () => {
//     return (
//         <Document>
//             <Page style={styles.body}>
//                 <Text style={styles.header} fixed></Text>
//                 <Image style={styles.image} src={LebronStretch} />
//                 <Text style={styles.text}>
//                     Oh right. I forgot about the battle. Wow, you got that off the
//                     Internet? In my day, the Internet was only used to download
//                     pornography. I don't know what you did, Fry, but once again, you
//                     screwed up! Now all the planets are gonna start cracking wise about
//                     our mamas. She also liked to shut up! We'll go deliver this crate like
//                     professionals, and then we'll go home. In your time, yes, but nowadays
//                     shut up! Besides, these are adult stemcells, harvested from perfectly
//                     healthy adults whom I killed for their stemcells. And I'm his friend
//                     Jesus. Incidentally, you have a dime up your nose. Oh, you're a dollar
//                     naughtier than most. Bender, being God isn't easy. If you do too much,
//                     people get dependent on you, and if you do nothing, they lose hope.
//                     You have to use a light touch. Like a safecracker, or a pickpocket.
//                     And why did 'I' have to take a cab? Perhaps, but perhaps your
//                     civilization is merely the sewer of an even greater society above you!
//                     Why would a robot need to drink? Stop! Don't shoot fire stick in space
//                     canoe! Cause explosive decompression! I'm sure those windmills will
//                     keep them cool. No! I want to live! There are still too many things I
//                     don't own! Now that the, uh, garbage ball is in space, Doctor, perhaps
//                     you can help me with my sexual inhibitions? I feel like I was mauled
//                     by Jesus. Anyhoo, your net-suits will allow you to experience Fry's
//                     worm infested bowels as if you were actually wriggling through them.
//                     Bender, I didn't know you liked cooking. That's so cute. Who am I
//                     making this out to? Aww, it's true. I've been hiding it for so long.
//                     Are you crazy? I can't swallow that. Bite my shiny metal ass. Leela's
//                     gonna kill me. You know, I was God once. There, now he's trapped in a
//                     book I wrote: a crummy world of plot holes and spelling errors! Yes!
//                     In your face, Gandhi! This is the worst kind of discrimination: the
//                     kind against me! No, I'm Santa Claus! You are the last hope of the
//                     universe. I am the man with no name, Zapp Brannigan! Why would I want
//                     to know that? I guess if you want children beaten, you have to do it
//                     yourself. Oh, I think we should just stay friends. No, just a regular
//                     mistake. I'm Santa Claus! And then the battle's not so bad? I daresay
//                     that Fry has discovered the smelliest object in the known universe!
//                     No! The kind with looting and maybe starting a few fires! Bender, quit
//                     destroying the universe! So, how 'bout them Knicks? Yes! In your face,
//                     Gandhi! For one beautiful night I knew what it was like to be a
//                     grandmother. Subjugated, yet honored. Bite my shiny metal ass. You
//                     know the worst thing about being a slave? They make you work, but they
//                     don't pay you or let you go. There's no part of that sentence I didn't
//                     like! And when we woke up, we had these bodies. Oh sure! Blame the
//                     wizards! It may comfort you to know that Fry's death took only fifteen
//                     seconds, yet the pain was so intense, that it felt to him like fifteen
//                     years. And it goes without saying, it caused him to empty his bowels.
//                     You guys aren't Santa! You're not even robots. How dare you lie in
//                     front of Jesus? Hey, whatcha watching? No, I'm Santa Claus! If rubbin'
//                     frozen dirt in your crotch is wrong, hey I don't wanna be right. Oh,
//                     you're a dollar naughtier than most. Then we'll go with that data
//                     file! Fry, we have a crate to deliver. And why did 'I' have to take a
//                     cab? I guess if you want children beaten, you have to do it yourself.
//                     Say it in Russian! Anyhoo, your net-suits will allow you to experience
//                     Fry's worm infested bowels as if you were actually wriggling through
//                     them. And I'm his friend Jesus. Now what? Your best is an idiot! Quite
//                     possible. We live long and are celebrated poopers. Switzerland is
//                     small and neutral! We are more like Germany, ambitious and
//                     misunderstood! I guess because my parents keep telling me to be more
//                     ladylike. As though! You know the worst thing about being a slave?
//                     They make you work, but they don't pay you or let you go.
//                 </Text>
//                 <Text
//                     style={styles.pageNumber}
//                     render={({ pageNumber, totalPages }) =>
//                         `${pageNumber} / ${totalPages}`
//                     }
//                 />
//             </Page>
//         </Document>
//     );
// };
// export default PDF;
