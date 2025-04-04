import { Modal, ModalProps, Pressable } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Colors } from "../../theme";
import EMCVStack from "../EMCVStack";
import { getFontFamily } from "../../styles/styles.util";
import { ptBRLocale, ptBRLocalesConfig } from "./calendarLocale";

LocaleConfig.defaultLocale = ptBRLocale;
LocaleConfig.locales["pt-BR"] = ptBRLocalesConfig;

interface EMCCalendarProps extends ModalProps {
  isTablet?: boolean;
  initialDate?: string;
  onDateSelect(selectedDate: string): void;
  onCancel(): void;
}

const EMCCalendar = ({
  isTablet,
  initialDate,
  onDateSelect,
  onCancel,
  ...rest
}: EMCCalendarProps) => {
  function validateDateString(date?: string) {
    try {
      if (
        date &&
        date.includes("/") &&
        (date.length === 6 ||
          date.length === 7 ||
          date.length === 8 ||
          date.length === 10)
      ) {
        const dateParts = date.split("/");

        if (dateParts.length === 3) {
          dateParts[0] = dateParts[0].padStart(2, "0");
          dateParts[1] = dateParts[1].padStart(2, "0");

          if (dateParts[2].length === 2) {
            dateParts[2] = "20" + dateParts[2];
          }

          if (
            dateParts[0].length !== 2 ||
            dateParts[1].length !== 2 ||
            dateParts[2].length !== 4
          ) {
            return undefined;
          }

          const dateValidate = new Date(
            dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0]
          );

          const validDate = dateValidate.getTime();

          if (!isNaN(validDate)) {
            return dateParts[0] + "/" + dateParts[1] + "/" + dateParts[2];
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    } catch (e) {
      return undefined;
    }
  }

  function dateStringBRToDateStringUS(date?: string) {
    const dateBR = validateDateString(date);

    if (dateBR) {
      const dateParts = dateBR.split("/");
      return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    } else {
      return "";
    }
  }

  const currentDaySelected = dateStringBRToDateStringUS(initialDate);
  let initialDateFormated: string | undefined;

  if (currentDaySelected.length > 0) {
    initialDateFormated = format(new Date(currentDaySelected), "yyyy-MM-01", {
      locale: pt,
    });
  }

  return (
    <Modal transparent={true} animationType="fade" {...rest}>
      <Pressable style={{ flex: 1 }} onPress={onCancel}>
        <EMCVStack flex={1} px={isTablet ? "15%" : 6} justify="center">
          <Calendar
            style={{
              paddingBottom: 10,
              borderRadius: 8,
              borderColor: Colors.gray[400],
              borderWidth: 1,
            }}
            theme={{
              arrowColor: Colors.blue[400],
              calendarBackground: Colors.light[50],
              selectedDayBackgroundColor: Colors.light[50],
              selectedDayTextColor: Colors.gray[800],
              todayTextColor: Colors.gray[800],
              dayTextColor: Colors.gray[800],
              textDayFontFamily: getFontFamily(),
              textMonthFontFamily: getFontFamily(),
              textDayHeaderFontFamily: getFontFamily(),
            }}
            firstDay={1}
            initialDate={initialDateFormated}
            markedDates={{
              [currentDaySelected]: {
                selected: true,
                selectedColor: Colors.blue[400],
                selectedTextColor: Colors.light[50],
              },
            }}
            onDayPress={(day) => onDateSelect(day.dateString)}
          />
        </EMCVStack>
      </Pressable>
    </Modal>
  );
};

export default EMCCalendar;
