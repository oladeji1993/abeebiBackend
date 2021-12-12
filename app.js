require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const app = express()
const cors = require("cors")
const userRouter = require("./api/users/user.router")
const productRouter = require("./api/product/product.router")
const packSizeRouter = require("./api/addPackSize/packSize.router")
const customerRouter = require("./api/customers/customer.router")
const paymentRouter = require("./api/payment/payment.router")
const orderRouter = require("./api/order/order.router")
const orderReportRouter = require("./api/salesReport/salesreport.router")
const procurementRouter = require("./api/procurement/procurement.router")
const paymentIDRouter = require("./api/paymentByID/paymentbyid.router")
const transationRouter = require("./api/transactions/transactions.router")


app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter)
app.use("/api/roles", userRouter)
app.use("/api/products", productRouter)
app.use("/api/createPacksize", packSizeRouter)
app.use("/api/customer", customerRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/order", orderRouter)
app.use("/api/report", orderReportRouter)
app.use("/api/procurement", procurementRouter)
app.use("/api/paymentID", paymentIDRouter)
app.use("/api/transaction", transationRouter)



app.listen(process.env.APP, () => console.log(`Listen on port ${process.env.APP}`))