import asyncHandler from "express-async-handler";

// @desc Get user data
// @route GET /api/tests/user
// @access Private
const getUserData = asyncHandler(async (req, res) => {
  res.json({
    name: "Navya",
    email: "navyamente@gmail.com",
    shippingAddress: {
      address: "KrPuram",
      pinNumber: "560036",
      phoneNumber: "1234567890",
    },
  });
});

export { getUserData };
