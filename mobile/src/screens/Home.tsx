import { ScrollView, Text, View } from "react-native";
import { daySize, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDatesFromYearBeginning()
const minimumSummaryDatesSizes = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay, i) => (
            <Text 
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{width: daySize}}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map((date, i) => (
              <HabitDay key={i} />
              ))
          }

          {
            amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <View 
                key={i}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{width: daySize, height: daySize}}
              />
              ))
          }
        </View>
      </ScrollView>

        
    </View>
  )
}