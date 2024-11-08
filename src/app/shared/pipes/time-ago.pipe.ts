import { Pipe, PipeTransform } from "@angular/core";
import { format } from "date-fns";
import { es } from "date-fns/esm/locale";

@Pipe({
	name: "timeAgo",
})
export class TimeAgoPipe implements PipeTransform {
	transform(value: Date | string): string {
		const date = typeof value === "string" ? new Date(value) : value;
		const options = { addSuffix: true, locale: es };
		const now = new Date();
		const diffInMinutes = Math.round(
			(now.getTime() - date.getTime()) / (1000 * 60)
		);

		if (diffInMinutes < 1) {
			return $localize`Ahora`;
		} else if (diffInMinutes < 60) {
			return `${diffInMinutes}min`;
		} else if (diffInMinutes < 24 * 60) {
			return `${Math.floor(diffInMinutes / 60)}h`;
		} else if (now.getFullYear() === date.getFullYear()) {
			return format(date, "d MMM.", options);
		} else {
			return format(date, "d MMM. yyyy", options);
		}
	}
}

@Pipe({
	name: "longDateFormat",
})
export class CustomDateFormatPipe implements PipeTransform {
	transform(value: Date | string): string {
		const date = typeof value === "string" ? new Date(value) : value;
		const options = {
			hour: "numeric",
			hour12: true,
			minute: "numeric",
			day: "numeric",
			month: "long",
			year: "numeric",
			locale: es,
		};

		return format(date, "hh:mm aaaa - d MMMM. yyyy", options);
	}
}

@Pipe({
	name: "secondsToTime",
})
export class SecondsToTimePipe implements PipeTransform {
	transform(seconds: number): string {
		const days = Math.floor(seconds / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
		const remainingSeconds = seconds % 60;

		const daysStr = days > 0 ? `${days.toFixed(0)}d ` : "";
		const hoursStr = hours > 0 ? `${hours.toFixed(0)}h ` : "";
		const minutesStr = minutes > 0 ? `${minutes.toFixed(0)}m ` : "";
		const secondsStr =
			remainingSeconds > 0 ? `${remainingSeconds.toFixed(0)}s` : "0s";

		return daysStr + hoursStr + minutesStr + secondsStr;
	}
}
