import add from "@/app/add";

test("1+2는 3이다.", () => {
	expect(add(1, 2)).toBe(3);
});
