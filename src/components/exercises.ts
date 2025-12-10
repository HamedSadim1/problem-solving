/**
 * @fileoverview Configuration file for all problem-solving exercises.
 * Contains exercise types, data structures, and component mappings.
 */

import React from "react";
import FindPovetIndex from "./FindPovetIndex";
import MiddleIndex from "./MiddleIndex";
import RunningSum from "./RunningSum";
import TwoSum from "./TwoSum";
import StringOefeningen from "./StringOefeningen";
import Fibonacci from "./Fibonacci";
import PalindromeCheck from "./PalindromeCheck";
import ReverseArray from "./ReverseArray";
import BinarySearch from "./BinarySearch";
import ValidParentheses from "./ValidParentheses";
import MaxSubarraySum from "./MaxSubarraySum";
import AnagramCheck from "./AnagramCheck";
import Factorial from "./Factorial";
import PrimeCheck from "./PrimeCheck";
import LongestCommonPrefix from "./LongestCommonPrefix";
import MergeSortedArrays from "./MergeSortedArrays";
import ClimbingStairs from "./ClimbingStairs";
import RemoveDuplicates from "./RemoveDuplicates";
import RomanToInteger from "./RomanToInteger";
import PowerOfTwo from "./PowerOfTwo";
import HappyNumber from "./HappyNumber";
import SingleNumber from "./SingleNumber";
import ContainsDuplicate from "./ContainsDuplicate";
import IntersectionArrays from "./IntersectionArrays";
import MoveZeroes from "./MoveZeroes";
import MajorityElement from "./MajorityElement";
import FizzBuzz from "./FizzBuzz";
import CountPrimes from "./CountPrimes";
import ReverseInteger from "./ReverseInteger";
import MissingNumber from "./MissingNumber";

/**
 * Union type representing all available exercise identifiers.
 * Used for type-safe exercise selection throughout the app.
 */
export type Exercise =
  | "twoSum"
  | "runningSum"
  | "pivotIndex"
  | "middleIndex"
  | "stringEndsWith"
  | "fibonacci"
  | "palindromeCheck"
  | "reverseArray"
  | "binarySearch"
  | "validParentheses"
  | "maxSubarraySum"
  | "anagramCheck"
  | "factorial"
  | "primeCheck"
  | "longestCommonPrefix"
  | "mergeSortedArrays"
  | "climbingStairs"
  | "removeDuplicates"
  | "romanToInteger"
  | "powerOfTwo"
  | "happyNumber"
  | "singleNumber"
  | "containsDuplicate"
  | "intersectionArrays"
  | "moveZeroes"
  | "majorityElement"
  | "fizzBuzz"
  | "countPrimes"
  | "reverseInteger"
  | "missingNumber";

/**
 * Interface for exercise configuration objects.
 * Each exercise has a display name and its corresponding React component.
 */
export interface ExerciseItem {
  /** The human-readable name of the exercise */
  name: string;
  /** The React component that implements the exercise */
  component: React.ReactElement;
}

/**
 * Registry of all available exercises.
 * Maps exercise identifiers to their configuration objects containing names and components.
 * Used by the app to dynamically render exercises based on user selection.
 */
export const exercises: Record<Exercise, ExerciseItem> = {
  twoSum: { name: "Two Sum", component: React.createElement(TwoSum) },
  runningSum: {
    name: "Running Sum",
    component: React.createElement(RunningSum),
  },
  pivotIndex: {
    name: "Pivot Index",
    component: React.createElement(FindPovetIndex),
  },
  middleIndex: {
    name: "Middle Index",
    component: React.createElement(MiddleIndex),
  },
  stringEndsWith: {
    name: "String Ends With",
    component: React.createElement(StringOefeningen),
  },
  fibonacci: {
    name: "Fibonacci Sequence",
    component: React.createElement(Fibonacci),
  },
  palindromeCheck: {
    name: "Palindrome Check",
    component: React.createElement(PalindromeCheck),
  },
  reverseArray: {
    name: "Reverse Array",
    component: React.createElement(ReverseArray),
  },
  binarySearch: {
    name: "Binary Search",
    component: React.createElement(BinarySearch),
  },
  validParentheses: {
    name: "Valid Parentheses",
    component: React.createElement(ValidParentheses),
  },
  maxSubarraySum: {
    name: "Max Subarray Sum",
    component: React.createElement(MaxSubarraySum),
  },
  anagramCheck: {
    name: "Anagram Check",
    component: React.createElement(AnagramCheck),
  },
  factorial: { name: "Factorial", component: React.createElement(Factorial) },
  primeCheck: {
    name: "Prime Check",
    component: React.createElement(PrimeCheck),
  },
  longestCommonPrefix: {
    name: "Longest Common Prefix",
    component: React.createElement(LongestCommonPrefix),
  },
  mergeSortedArrays: {
    name: "Merge Sorted Arrays",
    component: React.createElement(MergeSortedArrays),
  },
  climbingStairs: {
    name: "Climbing Stairs",
    component: React.createElement(ClimbingStairs),
  },
  removeDuplicates: {
    name: "Remove Duplicates",
    component: React.createElement(RemoveDuplicates),
  },
  romanToInteger: {
    name: "Roman to Integer",
    component: React.createElement(RomanToInteger),
  },
  powerOfTwo: {
    name: "Power of Two",
    component: React.createElement(PowerOfTwo),
  },
  happyNumber: {
    name: "Happy Number",
    component: React.createElement(HappyNumber),
  },
  singleNumber: {
    name: "Single Number",
    component: React.createElement(SingleNumber),
  },
  containsDuplicate: {
    name: "Contains Duplicate",
    component: React.createElement(ContainsDuplicate),
  },
  intersectionArrays: {
    name: "Intersection Arrays",
    component: React.createElement(IntersectionArrays),
  },
  moveZeroes: {
    name: "Move Zeroes",
    component: React.createElement(MoveZeroes),
  },
  majorityElement: {
    name: "Majority Element",
    component: React.createElement(MajorityElement),
  },
  fizzBuzz: { name: "FizzBuzz", component: React.createElement(FizzBuzz) },
  countPrimes: {
    name: "Count Primes",
    component: React.createElement(CountPrimes),
  },
  reverseInteger: {
    name: "Reverse Integer",
    component: React.createElement(ReverseInteger),
  },
  missingNumber: {
    name: "Missing Number",
    component: React.createElement(MissingNumber),
  },
};
