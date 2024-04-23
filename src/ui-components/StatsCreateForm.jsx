/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createStats } from "../graphql/mutations";
export default function StatsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    plunks: "",
    selfPlunk: false,
    didWin: false,
    plinks: "",
    drinks: "",
    points: "",
  };
  const [plunks, setPlunks] = React.useState(initialValues.plunks);
  const [selfPlunk, setSelfPlunk] = React.useState(initialValues.selfPlunk);
  const [didWin, setDidWin] = React.useState(initialValues.didWin);
  const [plinks, setPlinks] = React.useState(initialValues.plinks);
  const [drinks, setDrinks] = React.useState(initialValues.drinks);
  const [points, setPoints] = React.useState(initialValues.points);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlunks(initialValues.plunks);
    setSelfPlunk(initialValues.selfPlunk);
    setDidWin(initialValues.didWin);
    setPlinks(initialValues.plinks);
    setDrinks(initialValues.drinks);
    setPoints(initialValues.points);
    setErrors({});
  };
  const validations = {
    plunks: [{ type: "Required" }],
    selfPlunk: [{ type: "Required" }],
    didWin: [{ type: "Required" }],
    plinks: [],
    drinks: [],
    points: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          plunks,
          selfPlunk,
          didWin,
          plinks,
          drinks,
          points,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createStats.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StatsCreateForm")}
      {...rest}
    >
      <TextField
        label="Plunks"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={plunks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              plunks: value,
              selfPlunk,
              didWin,
              plinks,
              drinks,
              points,
            };
            const result = onChange(modelFields);
            value = result?.plunks ?? value;
          }
          if (errors.plunks?.hasError) {
            runValidationTasks("plunks", value);
          }
          setPlunks(value);
        }}
        onBlur={() => runValidationTasks("plunks", plunks)}
        errorMessage={errors.plunks?.errorMessage}
        hasError={errors.plunks?.hasError}
        {...getOverrideProps(overrides, "plunks")}
      ></TextField>
      <SwitchField
        label="Self plunk"
        defaultChecked={false}
        isDisabled={false}
        isChecked={selfPlunk}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              plunks,
              selfPlunk: value,
              didWin,
              plinks,
              drinks,
              points,
            };
            const result = onChange(modelFields);
            value = result?.selfPlunk ?? value;
          }
          if (errors.selfPlunk?.hasError) {
            runValidationTasks("selfPlunk", value);
          }
          setSelfPlunk(value);
        }}
        onBlur={() => runValidationTasks("selfPlunk", selfPlunk)}
        errorMessage={errors.selfPlunk?.errorMessage}
        hasError={errors.selfPlunk?.hasError}
        {...getOverrideProps(overrides, "selfPlunk")}
      ></SwitchField>
      <SwitchField
        label="Did win"
        defaultChecked={false}
        isDisabled={false}
        isChecked={didWin}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              plunks,
              selfPlunk,
              didWin: value,
              plinks,
              drinks,
              points,
            };
            const result = onChange(modelFields);
            value = result?.didWin ?? value;
          }
          if (errors.didWin?.hasError) {
            runValidationTasks("didWin", value);
          }
          setDidWin(value);
        }}
        onBlur={() => runValidationTasks("didWin", didWin)}
        errorMessage={errors.didWin?.errorMessage}
        hasError={errors.didWin?.hasError}
        {...getOverrideProps(overrides, "didWin")}
      ></SwitchField>
      <TextField
        label="Plinks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={plinks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              plunks,
              selfPlunk,
              didWin,
              plinks: value,
              drinks,
              points,
            };
            const result = onChange(modelFields);
            value = result?.plinks ?? value;
          }
          if (errors.plinks?.hasError) {
            runValidationTasks("plinks", value);
          }
          setPlinks(value);
        }}
        onBlur={() => runValidationTasks("plinks", plinks)}
        errorMessage={errors.plinks?.errorMessage}
        hasError={errors.plinks?.hasError}
        {...getOverrideProps(overrides, "plinks")}
      ></TextField>
      <TextField
        label="Drinks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={drinks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              plunks,
              selfPlunk,
              didWin,
              plinks,
              drinks: value,
              points,
            };
            const result = onChange(modelFields);
            value = result?.drinks ?? value;
          }
          if (errors.drinks?.hasError) {
            runValidationTasks("drinks", value);
          }
          setDrinks(value);
        }}
        onBlur={() => runValidationTasks("drinks", drinks)}
        errorMessage={errors.drinks?.errorMessage}
        hasError={errors.drinks?.hasError}
        {...getOverrideProps(overrides, "drinks")}
      ></TextField>
      <TextField
        label="Points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={points}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              plunks,
              selfPlunk,
              didWin,
              plinks,
              drinks,
              points: value,
            };
            const result = onChange(modelFields);
            value = result?.points ?? value;
          }
          if (errors.points?.hasError) {
            runValidationTasks("points", value);
          }
          setPoints(value);
        }}
        onBlur={() => runValidationTasks("points", points)}
        errorMessage={errors.points?.errorMessage}
        hasError={errors.points?.hasError}
        {...getOverrideProps(overrides, "points")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
