"use client";

import { Box, Button, Text } from "@mantine/core";

//questions//
//Do you feel tired even if you get enough sleep?
// Is your period late?
//Do you have a higher body temperature than usual?
//Are your breasts more sensitive and swollen?
//Do you have lower backaches or does your lower back feel stiff?
//Do you experience vomiting and feel sick in the morning?
//Do you urinate more than usual?
//Do you feel cravings for certain foods?
//Do you have mood swings?
//Do you have headaches?
//

//result//
// Great news! Based on your answers, it looks like you could be on your way to becoming a mom.

// However, always keep in mind that online tests are just initial indicators. They don't have the accuracy of a doctor's expertise.

// Our bodies work in unique and intricate ways, and at times, it's essential to consult with a medical professional. They can provide a comprehensive evaluation to confirm any signs or feelings you might have.

// For the clearest answer about pregnancy, you should see a doctor. While our test gives an idea, it's always best to double-check.

// We suggest talking to your doctor or trying a home pregnancy test. They'll guide you with the best advice and ensure you have all the information you need throughout the process.

export default function Question({
  quest,
  onClickYes,
  onClickNo,
}: {
  quest: string;
  onClickYes: any;
  onClickNo: any;
}) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "10dvh",
      }}
    >
      <Box>
        <Text ta="center" mb="lg">
          {quest}
        </Text>
        <Button
          onClick={onClickYes}
          size="md"
          m="md"
          px="xl"
          bg={"var(--mantine-color-green-7)"}
          c={"var(--mantine-color-white)"}
        >
          Yes
        </Button>
        <Button
          onClick={onClickNo}
          size="md"
          m="md"
          px="xl"
          c={"var(--mantine-color-white)"}
          bg={"var(--mantine-color-red-7)"}
        >
          No
        </Button>
      </Box>
    </Box>
  );
}
