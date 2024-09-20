"use client";
import { useEffect, useState } from "react";
import {
  Stepper,
  Button,
  Group,
  Code,
  Progress,
  Box,
  Text,
  Card,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Question from "./Question";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Typhoid() {
  const [active, setActive] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (active == 10) {
      if (score > 4) {
        setResult(
          "Great news! Based on your answers, it looks like you could be on your way to becoming a mom."
        );
        setColor("var(--mantine-color-green-7)");
      } else {
        setResult(
          "Hmm! From your response, it seams you are not pregnant. but we advice you still go for check-up to be sure. Thanks."
        );
        setColor("var(--mantine-color-red-7)");
      }
    }
  }, [active]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      website: "",
      github: "",
    },
  });

  const handleYes = () => {
    setScore((score) => {
      return score + 1;
    });
    setActive((current) => {
      return current < 10 ? current + 1 : current;
    });
  };

  const handleNo = () => {
    setActive((current) => {
      return current < 10 ? current + 1 : current;
    });
  };

  const prevStep = () => {
    setScore((score) => {
      return score - 1;
    });
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  //questions//
  //Do you feel tired even if you get enough sleep?
  // Is your period late?
  //Do you have a higher body temperature than usual?
  //Are your breasts more sensitive and swollen?/
  //Do you have lower backaches or does your lower back feel stiff?/
  //Do you experience vomiting and feel sick in the morning?/
  //Do you urinate more than usual?/
  //Do you feel cravings for certain foods?/
  //Do you have mood swings?/
  //Do you have headaches?
  //
  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you feel tired even if you get enough sleep?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Is your period late?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you have a higher body temperature than usual?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Are your breasts more sensitive and swollen?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you have lower backaches or does your lower back feel stiff?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you experience vomiting and feel sick in the morning?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you urinate more than usual?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you feel cravings for certain foods?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you have mood swings?"
            />
          </TheCard>
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <TheCard>
            <Question
              onClickNo={handleNo}
              onClickYes={handleYes}
              quest="Do you have headaches?"
            />
          </TheCard>
        </Stepper.Step>

        <Stepper.Completed>
          <TheCard>
            <Text fw="bold" fz="xl" c={color}>
              {result}
            </Text>
          </TheCard>

          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Link href={"/"} passHref>
              <Button mt="xl" radius="xl" className={styles.control} size="lg">
                Go back to home page
              </Button>
            </Link>
          </Box>
        </Stepper.Completed>
      </Stepper>
      {active < 10 && <Progress mt="lg" value={(active / 10) * 100} />}

      <Group justify="flex-end" mt="xl">
        {/* {active !== 0 && (
          <Button m="md" variant="default" onClick={prevStep}>
            Back
          </Button>
        )} */}
        {/* {active !== 3 && <Button onClickNo={handleNo} onClickYes={handleYes}>Next step</Button>} */}
      </Group>
    </>
  );
}

const TheCard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center" }}
      mt="xl"
      ta="center"
    >
      <Card radius="lg" maw="500" shadow="lg">
        {children}
      </Card>
    </Box>
  );
};
